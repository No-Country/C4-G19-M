import React from 'react'
import { Button } from 'reactstrap'
import { useUserContext } from '../../Store/UserContext'
import Swal from "sweetalert";
import { useCRUD } from '../../services/useCRUD';

const RegisterBtn = ({isSubmitting , isValid, id }) => {
  const {isUser} = useUserContext()
  const {onDeleteSubmit} = useCRUD()
 

  const onRemove = () => {
    Swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      buttons:{
        cancel: {
          text: "Cancel",
          value: false,
          visible: true,
          className: "",
          closeModal: true,
          
        },
        confirm: {
          text: "OK",
          value: true,
          visible: true,
          className: "bg-danger",
          closeModal: true
        }
        
      }  
    }).then((result) => {
      if (result) {
        onDeleteSubmit()               
      }
    })


    
  }
 

  return (
    <div className='d-flex justify-content-around align-items-center mt-3 mb-3'>
    <Button 
     color="primary"
     type='submit'
     disabled={isSubmitting || !isValid}>
      Submit
    </Button>
    {isUser &&  
    <Button color="danger" type='reset' disabled={isSubmitting || !isValid} onClick={onRemove} >
      Remove this profile
    </Button> }
   
  </div>
  )
}

export default RegisterBtn