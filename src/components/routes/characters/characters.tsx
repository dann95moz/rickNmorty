import { useEffect, useState } from "react";
import "./characters.css";
import { Characters } from "../../../interfaces/global/characters.interface";
import {
  getAllCharacters,
  getFilteredCharacters,
} from "../../../services/getCharacters.service";
import { CharactersResults } from "../../../interfaces/Results/charactersResults.interface";
import { CardComponent } from "../../cards/cards";
import Grid from "@mui/material/Grid";
import { optionFilters } from '../../../interfaces/optionFilters.interface';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

export function CharactersComponent() {
  
  const [characters, setcharacters] = useState<Characters>({} as Characters);


const status =['alive','dead','unknown']
const gender=['female','male','genderless','unknown']
const filtersArr=[
    {status},
    {gender}
]
const [filters, setfilters] = useState<optionFilters>()
      
const handleChipClick =(data:any)=>{
  const updatedFilters:any = Object.assign({}, filters);
  setfilters(updatedFilters)
  for (const key in data) {
    if (!updatedFilters.hasOwnProperty(key) || updatedFilters[key] !== data[key]) {
      updatedFilters[key] = data[key];
    }
  }

  getFilteredCharacters(updatedFilters).then((response) => {
    console.log(response);
    setcharacters(response.data);
  });

 }
  const filtersContent = (element:any,index:number)=>(
    <Grid key={index}>
        <Grid item md={12}>
            <h4 >{Object.keys(element)}</h4> 
            <Grid container spacing={1}>
                {
                element.status?
                 element.status.map(filtersTag) 
                 :
                  element.gender.map(filtersTag)
                  }
      
            </Grid>
        </Grid>
    </Grid>
)
const filtersTag =(element:string,index:number,array:string[])=>(
    <Grid item key={element} >        
        <Chip 
        label={element}
        
        onClick={()=>{         
            {  array === status ?
              handleChipClick({status: element})
              :
              handleChipClick({gender: element})
          }    
        }
         }           
         />
    </Grid>
)



    

  {
    useEffect(() => {
   
    getAllCharacters().then((response) => {
      setcharacters(response.data)
    })
   
      
    },[] );


 

    const chars = (character: CharactersResults) => (
      <Grid key={character.id} item xs={12} md={6} lg={4} xl={3}>
        <CardComponent
          key={character.id}
          name={character.name}
          location={character.origin.name}
          specie={character.species}
          image={character.image}
        />
      </Grid>
    );

    return (
      <Grid container spacing={2} className="content-container">
        <Grid item xs={12} md={3}> 
        <Grid container spacing={2} className='filters-container'>
    <Grid item md={12}><p className="title">Filter by category</p></Grid> 
    
    <Stack direction="row" spacing={1}>
    <Grid item md={12}>
        {filtersArr.map(filtersContent)}
    </Grid>
</Stack>
    </Grid>
        </Grid>
          <Grid className="cards-container" container spacing={2} item xs={12} md={8} lg={8} xl={8} >
            {characters.results && characters.results.map(chars)}
          </Grid>
        
      </Grid>
    );
  }
}
