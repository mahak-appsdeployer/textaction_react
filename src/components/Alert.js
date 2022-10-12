import React from 'react'

function Alert(props) {
    const capitalize =(word) => {
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
    <div style= {{height: '38px'}}>
{  props.alert &&  <div  class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}  </div>//here if props.alert is not null thn only furhter div condition runs 
  )
}

export default Alert