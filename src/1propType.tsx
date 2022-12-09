type nameType = {
    name: String
}

// There are three ways to declare props type and we have to pass name props once we set type of the props

// const PropType = (props: nameType) => {
// const PropType = (props: {name: String}) => {
// const PropType = ({name}: nameType) => {

const PropType = ({name}: nameType) => {
  return (
    <div>{name}</div>
  )
}

const MyComponent = () => <PropType name="My name" />

export default MyComponent;