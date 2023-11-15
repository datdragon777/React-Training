export default function LightSwitch() {

  const handleChangeBackground = () => {
    const bgStyle = document.body.style
    if (bgStyle.backgroundColor === "black") {
        bgStyle.backgroundColor = "white"
    } else {
        bgStyle.backgroundColor = "black"
    }
  }  
  return (
    <button onClick={handleChangeBackground}>
      Toggle the lights
    </button>
  )
}
