// This component is in typescript and it is used to mirror the database to send sql requests.
class Warehouse{
    warehouse_id: number;
    warehouse_name: string;
    warehouse_location: string;
    warehouse_size: number;

    constructor(warehouse_id=0, warehouse_name='', warehouse_location='', warehouse_size=0){
        this.warehouse_id=warehouse_id;
        this.warehouse_name=warehouse_name;
        this.warehouse_location=warehouse_location;
        this.warehouse_size=warehouse_size;
    }
}
export default Warehouse;