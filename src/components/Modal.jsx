import React, {useState} from 'react'

const Modal = (props) => {
    const title = props.title;
    const desc1 = props.desc1;
    const desc2 = props.desc2;
    const [showModal, setShowModal] = useState(true);
    return (
        <>
        {showModal && ( 
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h3 className="text-xl font-semibold text-black" id="modal-title">{title} !!</h3>
                                <div className="mt-2">
                                    <p className="text-lg text-gray-900"> {desc1} <br /> {desc2} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" px-4 pb-2 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" onClick={() => setShowModal(false)} className="inline-flex w-full justify-center rounded-md bg-green-300 px-3 py-2 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-400 sm:mt-0 sm:w-auto">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div> ) }
        
        </>
    )
}

export default Modal