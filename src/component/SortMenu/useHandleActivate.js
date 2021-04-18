const useHandleActivate = ({ active, setActive }) => {
  /**
   * Description: Custom hook to handle action based on click on the sort options menu toggle.
   * @param {bool} active is the current state of the sort options menu
   * @param {function} setActive updates the active state of the sort options menu.
   * @return {null}
  */

  const handleClick = () => {
  /**
   * Description: Handles toggle of active state from true to false or false to true.
   * @return {null}
  */

    active === true ? setActive(false) : setActive(true)
  }

  return handleClick
}

export default useHandleActivate
