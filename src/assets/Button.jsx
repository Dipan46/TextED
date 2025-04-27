function Button({ children, onClick }) {
    return (
        <button className="btn btn-primary" type="submit" onClick={onClick}>
            {children}
        </button>
    );
}
export default Button;
