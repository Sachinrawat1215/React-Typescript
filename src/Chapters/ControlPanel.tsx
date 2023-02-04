// -- Difference between interface and type

// ** we can extends interface like we can use one interface to add some more types in it. 
// ** We can overwrite types in interface 



// Way to extend interface

// interface ControlPanelType {
//     name: string
//     onChange: any
// }

// interface AdminControlPanelType extends ControlPanelType {
//     isAdmin: boolean
// }




// Way to extend type 

// type AdminPanelType = ControlPanelType & { isAdmin: boolean }



type ControlPanelType = {
    name: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
}



const ControlPanel = ({ name, onChange }: ControlPanelType) => {
    return (
        <form
            className="flex flex-row gap-4 text-white bg-primary-10"
            onSubmit={(event) => event.preventDefault()}
        >
            <div>
                <label className="font-bold">Your Name</label>
                <input
                    name="name"
                    className="w-full"
                    type="text"
                    value={name}
                    onChange={onChange}
                />
            </div>
        </form>
    );
};

export default ControlPanel;