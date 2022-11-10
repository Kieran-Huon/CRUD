/*
import { namedDelete } from "jsdom/lib/jsdom/living/generated/utils";
import { useState } from "react";
import ReactDOM from 'react-dom/client';

export function Button({
  title,
  backgroundColor = "blue",
  color = "black",
  rounded = false,
  onClick,
}) {
  if (!onClick) {
    throw new Error("no onClick function provided");
  }
  const styles = {
    backgroundColor,
    color,
  };
  if (rounded) {
    styles.borderRadius = "40%";
  }

  return (
    <button style={styles} onClick={onClick}>
      {title}
    </button>
  );
}


export default function Forms() {
    
      const [inputs, setInputs] = useState({});
    
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
      }
    
      return (
        <form onSubmit={handleSubmit}>
          <label>Prénom :
          <input 
            type="text" 
            name="username" 
            value={inputs.username || ""} 
            onChange={handleChange}
          required />
          </label>
          <div></div>
          <label>Nom :
          <input 
            type="text" 
            name="name" 
            value={inputs.name || ""} 
            onChange={handleChange}
          required />
          </label>
          <div></div>
          <label>Age :
            <input 
              type="number" 
              name="age" 
              value={inputs.age || ""} 
              onChange={handleChange}
            required />
            </label>
            <div></div>
          <label>Email:
            <input 
              type="email" 
              name="mail" 
              value={inputs.mail || ""} 
              onChange={handleChange}
           required />
            </label>
            <div></div>
          <label>Mots de passe :
          <input 
            type="password"
            name="mdp"
            value={inputs.mdp || ""} 
            onChange={handleChange}
          required />
          </label>
          <div></div>
          <label>Compétences :
          <select 
          multiple name = "Skills "
          onChange={handleChange} >
            <option value="Smash Bros">Smash Bros</option>
            <option value="Mario Kart">Mario Kart</option>
            <option value="Zelda BOTW">Zelda BOTW</option>
          </select>
          </label>
          <div></div>
          <label>RGPD :
          <input 
            type="checkbox"
            name="rgpd" 
          required/>
          </label>
          
          <Button
              title="Envoyer"
              color="#FFFFFF"
              padding="6px 12px"
              backgroundColor= "#0D6EFD"
              onClick={() => alert("Validé")}
            />
          
        </form>
        
      )
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Forms />);
    */

    
import { namedDelete } from "jsdom/lib/jsdom/living/generated/utils";
import { useState } from "react";
import ReactDOM from 'react-dom/client';

export function Button({
  title,
  backgroundColor = "blue",
  color = "black",
  rounded = false,
  onClick,
}) {
  if (!onClick) {
    throw new Error("no onClick function provided");
  }
  const styles = {
    backgroundColor,
    color,
  };
  if (rounded) {
    styles.borderRadius = "40%";
  }

  return (
    <button style={styles} onClick={onClick}>
      {title}
    </button>
  );
}


export default function Forms() {
    
      const [inputs, setInputs] = useState({});
    
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
      }
    
      return (
        <form onSubmit={handleSubmit}>
          
          <div></div>
          <label>Nom du personnage    
          <input 
            type="text" 
            name="name" 
            value={inputs.name || ""} 
            onChange={handleChange}
          required />
          </label>
          
          
          
          
          
          <Button
              type="submit"
              title="Envoyer"
              color="#FFFFFF"
              padding="6px 12px"
              backgroundColor= "#0D6EFD"
              onClick={() => alert("Validé")}
            />
          
        </form>
        
      )
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Forms />);
    

    