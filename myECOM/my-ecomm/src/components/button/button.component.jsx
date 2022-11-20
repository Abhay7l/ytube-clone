import "./button.styles.scss"
// children refers to inside tags or text 

const BUTTON_TYPE_CLASSES={
    google:'google-sign-in',
    inverter:'inverted'
};
const Button = ({children,buttonType,...otherProps}) =>{
 return (
    // <div className="button-comp">
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
    // </div>
 )
}
export default Button;