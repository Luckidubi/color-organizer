import { useInput} from "./hooks";
import{ useColors } from "./ColorProvider"

function AddColorForm(){
  // const txtTitle = useRef();  //useRef method
  // const hexColor = useRef();
  // const [title, setTitle] = useState("");  
  // const [color, setColor] = useState("#000000");    //UseState Method

  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const { addColor } = useColors();

  const submit = e => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);   // Custom hook method
    resetTitle();
    resetColor();
    // onNewColor(title, color); //useState method
    // setTitle("");
    // setColor("");
    // const title = txtTitle.current.value; 
    // const color = hexColor.current.value;
    // onNewColor(title, color);  //useRef method
    // txtTitle.current.value = "";
    // hexColor.current.value = "";
  }

  return (
    <div>
    <form onSubmit={submit}>
    <input 
      {...titleProps}
      
      type="text" 
      placeholder="color title" 
      required/>
      <input 
        {...colorProps}
        
        type="color" 
        required/>
      <button>ADD</button>
    </form>
    
    </div>
  )
}

export default AddColorForm;