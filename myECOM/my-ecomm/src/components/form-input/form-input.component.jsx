import "./form-input.styles.scss"
const FormInput=({label, ...otherProps})=>{
//lecture 100
    return (
    <div className="group">
        <input className="form-input" {...otherProps}/>
    {label && (
     <label className={`${otherProps.value.length ?'shrink':''}form-input-label`}
     >
     {label}
     </label>
    )}
{/* if we enter some value in the input then the label field will have a class shrink append to it else it will have an empty string appended to class form-input-label */}
    </div>
);
};

export default FormInput;