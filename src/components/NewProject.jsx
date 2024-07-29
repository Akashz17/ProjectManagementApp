import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal";

export default function NewProject({onAdd,onCancel}){

    const modal =useRef();
    const title =useRef();
    const description = useRef();
    const DueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = DueDate.current.value;

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
            modal.current.open();
            return;
        }
        onAdd({
            title:enteredTitle,
            description:enteredDescription,
            DueDate:enteredDueDate
        });
    }

    return(
        <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className='text-xl text-stone-700 mt-4 my-4'>Invalid Input</h2>
            <p className='text-stone-500 mb-4'>Oops... Looks like you forgot to enter a value</p>
            <p className='text-stone-500 mb-4'>Please make sure you provide a valid value for every input field</p>
        </Modal>

        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="px-6 py-2 bg-stone-50 hover:bg-stone-100 rounded-md" onClick={onCancel}>Cancel</button></li>
                <li><button className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md" onClick={handleSave}>Save</button></li>
            </menu>
            <div>
                <Input  ref={title} label="title"/>
                <Input type={"text"} ref={description} label="Description" textarea/>
                <Input type={"date"} ref={DueDate} label="Due Date"/>
            </div>
        </div>
        </>
    )
}