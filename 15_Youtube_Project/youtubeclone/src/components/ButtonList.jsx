import { BUTTON_LIST } from "../utils/constants"
import Button from "./Button"

const ButtonList = () => {
  return (
    <div className="flex gap-2 no-scrollbar overflow-x-scroll">
        {
            BUTTON_LIST.map(button => <Button key={button} name={button} />)
        }
    </div>
  )
}

export default ButtonList