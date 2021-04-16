
const useHandleActivate = ({ active, setActive }) => {
  const handleClick = () => {
    active === true ? setActive(false) : setActive(true)
  }

  return handleClick
}

export default useHandleActivate
