import { useColors} from "./ColorProvider"
import Color from "./Color";


function ColorList() {
  const {colors} = useColors();
  if(!colors.length) return <div>No Colors Listed. Add a Color </div>;
  return (
    <div>
      {
        colors.map(color => <Color key={color.id} {...color} />)
      }
    </div>
  )
}

export default ColorList;