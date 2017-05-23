(ns clojure-club.x113-making-data-dance.java-interop
  (:require [clojure.string :as cs])
  (:import (javax.swing JFrame JTable JScrollPane JMenuBar JMenu JMenuItem Action AbstractAction JFileChooser UIManager JLabel SwingUtilities)
           (java.awt BorderLayout Color)
           (javax.swing.table AbstractTableModel DefaultTableCellRenderer TableCellRenderer)
           (java.awt.event ActionEvent)))

(def cell-renderer
  (proxy [DefaultTableCellRenderer] []
    (getTableCellRendererComponent [table color selected? has-focus? row col]
      (let [s (proxy-super getTableCellRendererComponent table color selected? has-focus? row col)]
        (doto s
          (.setBackground (if (even? row) Color/LIGHT_GRAY Color/WHITE)))))))

(defn ^Action openAction [state]
  (proxy [AbstractAction] ["Open..."]
    (actionPerformed [^ActionEvent event]
      (let [jc (JFileChooser.)]
        (when (= JFileChooser/APPROVE_OPTION (.showOpenDialog jc (.getSource event)))
          (->> (.getSelectedFile jc)
               slurp
               cs/split-lines
               (mapv #(cs/split % #","))
               (swap! state assoc :data)))))))

(defn ^Action saveAction [state]
  (proxy [AbstractAction] ["Save..."]
    (actionPerformed [^ActionEvent event]
      (let [jc (JFileChooser.)]
        (when (= JFileChooser/APPROVE_OPTION (.showSaveDialog jc (.getSource event)))
          (->> state deref :data (map (partial cs/join ",")) (cs/join "\n") (spit (.getSelectedFile jc))))))))

(defn ^Action addRow [state]
  (proxy [AbstractAction] ["Add row"]
    (actionPerformed [^ActionEvent event]
      (let [ncols (count (get-in @state [:data 0]))]
        (swap! state update :data conj (vec (repeat ncols nil)))))))

(defn ^Action addCol [state]
  (proxy [AbstractAction] ["Add column"]
    (actionPerformed [^ActionEvent event]
      (swap! state update :data #(mapv (fn [c] (conj c nil)) %)))))

(defn model [state]
  (let [table-model (proxy [AbstractTableModel] []
                      (getRowCount [] (count (get-in @state [:data])))
                      (getColumnCount [] (count (get-in @state [:data 0])))
                      (getValueAt [row col] (get-in @state [:data row col]))
                      (setValueAt [o row col] (swap! state assoc-in [:data row col] o))
                      (isCellEditable [row col] true))]
    (add-watch state ::table-data-changed
               (fn [_ _ o n]
                 (do
                   (.fireTableDataChanged table-model)
                   (.fireTableStructureChanged table-model))))
    table-model))

(defn launch-app [state]
  (UIManager/setLookAndFeel (UIManager/getSystemLookAndFeelClassName))
  (doto (JFrame. "The App")
    (.setSize 800 600)
    (.setDefaultCloseOperation JFrame/DISPOSE_ON_CLOSE)
    (.setLayout (BorderLayout.))
    (.setJMenuBar (doto (JMenuBar.)
                    (.add (doto (JMenu. "File")
                            (.add (JMenuItem. (openAction state)))
                            (.add (JMenuItem. (saveAction state)))))
                    (.add (doto (JMenu. "Edit")
                            (.add (JMenuItem. (addRow state)))
                            (.add (JMenuItem. (addCol state)))))))
    (.add (doto (JScrollPane.
                  (doto (JTable. (model state))
                    (.setAutoResizeMode JTable/AUTO_RESIZE_OFF)
                    (.setGridColor Color/BLACK)
                    (.setDefaultRenderer Object cell-renderer))))
          BorderLayout/CENTER)
    (.setVisible true)))

;(def state (atom {:data [[1 2] [3 4][1 2] [3 4]]}))
;(def app (launch-app state))
;(.setSize app 300 300)
;(swap! state assoc :data [["Hi" "There"] ["I" "like"] ["Clojure" "!"]])

;;Poking around
;(bean (JFrame.))
;(parents JFrame) ;Immediate - classes and derived hierarchies
;(bases JFrame) ;Immediate - classes only
;(ancestors JFrame) ;Also works for derived hierarchies
;(supers JFrame) ;classes only
;(ancestors (class {}))
;(ancestors (class []))
