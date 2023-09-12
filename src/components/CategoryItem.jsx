const CategoryItem = ({isActive = false, name}) => {
return (
    <a className = {`nav-link active ${isActive ? "active fw-bolder" : null}`} aria-current="page" href="#">{name}</a>
)
}

export default CategoryItem;