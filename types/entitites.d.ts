/// <reference no-default-lib="true"/> 

declare namespace tinitypes.Entities {

    type AnyObject = Record<string, any>;
    interface UPDATE_VIEW_DATA_METHODS<D> {
        /**
         * function that updates `this.data` and triggers update UI
         * @param updater the whole or the partial of new this.data or any plain Object
         * @param callback callback will be triggerred after updated this.data and UI
         */
        setData(updater: Partial<D> & AnyObject, callback?: (data: D) => void): Promise<void>;
        /**
      * function that updates `this.data` and trigger update UI
      * @param updater function that return the whole or the partial of new this.data or any plain Object
      * @param callback callback will be triggerred after updated this.data and UI
      */
        setData(updater: (data: D) => Partial<D> & AnyObject, callback?: (data: D) => void): Promise<void>;
      }
    
}