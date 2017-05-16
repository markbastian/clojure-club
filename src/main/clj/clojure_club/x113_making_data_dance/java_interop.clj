(ns clojure-club.x113-making-data-dance.java-interop
  (:require [clojure.string :as cs])
  (:import (javax.swing JFrame JTable JScrollPane JMenuBar JMenu JMenuItem Action AbstractAction JFileChooser)
           (java.awt BorderLayout Color)
           (javax.swing.table AbstractTableModel)
           (java.awt.event ActionEvent)))

(defn ^Action openAction [state]
  (proxy [AbstractAction] ["Open"]
    (actionPerformed [^ActionEvent event]
      (let [jc (JFileChooser.)]
        (when (= JFileChooser/APPROVE_OPTION (.showOpenDialog jc (.getSource event)))
          (->> (.getSelectedFile jc)
               slurp
               cs/split-lines
               (mapv #(cs/split % #","))
               (swap! state assoc :data)))))))

(defn model [state]
  (let [table-model (proxy [AbstractTableModel] []
                      (getRowCount [] (count (get-in @state [:data])))
                      (getColumnCount [] (count (get-in @state [:data 0])))
                      (getValueAt [row col] (get-in @state [:data row col])))]
    (add-watch state ::table-data-changed
               (fn [_ _ o n]
                 (do
                   (.fireTableDataChanged table-model)
                   (.fireTableStructureChanged table-model))))
    table-model))

(def state (atom {:data [[1 2] [3 4]]}))

(doto (JFrame. "The App")
  (.setSize 800 600)
  (.setDefaultCloseOperation JFrame/DISPOSE_ON_CLOSE)
  (.setLayout (BorderLayout.))
  (.setJMenuBar (doto (JMenuBar.)
                  (.add (doto (JMenu. "File")
                          (.add (JMenuItem. (openAction state)))))
                  (.add (JMenu. "Edit"))))
  (.add (doto (JScrollPane.
                (doto (JTable. (model state))
                  (.setGridColor Color/BLACK))))
        BorderLayout/CENTER)
  (.setVisible true))
