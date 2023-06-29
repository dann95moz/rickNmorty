import { useEffect, useState } from "react";
import "./characters.css";
import { Characters } from "../../../interfaces/global/characters.interface";
import {

  getFilteredCharacters,
} from "../../../services/apiCalls/getCharacters.service";
import { CharactersResults } from "../../../interfaces/Results/charactersResults.interface";
import Grid from "@mui/material/Grid";
import { optionFilters } from '../../../interfaces/optionFilters.interface';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { Pagination } from "@mui/material";
import { CharacterCard } from "../../cards/characterCards.component";

export function CharactersComponent() {
  const [characters, setcharacters] = useState<Characters>({} as Characters);
const [page, setPage] = useState<number>(1)

const status =['alive','dead','unknown']
const gender=['female','male','genderless','unknown']
const filtersArr=[
    {status},
    {gender}
]
const [filters, setfilters] = useState<optionFilters>()
const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  const filterByPage = Object.assign({page:value}, filters); 
    setPage(value);
    getFilteredCharacters(filterByPage).then((response) => {
      setcharacters(response.data)
    })
};

const handleChipClick =(data:any)=>{
  setPage(1)
  const updatedFilters:any = Object.assign({}, filters);  
  setfilters(updatedFilters)
  for (const key in data) {
    if (!updatedFilters.hasOwnProperty(key) || updatedFilters[key] !== data[key]) {
      updatedFilters[key] = data[key];
    }
  }

  getFilteredCharacters(updatedFilters).then((response) => {
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
const filtersTag =(element:string)=>(
    <Grid item key={element} 
    >        
        <Chip 
        clickable= {true}
        label={element}
        variant="outlined"
        onClick={()=>{                   
              status.includes(element) ?
              handleChipClick({status: element})
              :
              handleChipClick({gender: element})
             
        }
         }           
         />
    </Grid>
)
  {
    useEffect(() => {
   
    getFilteredCharacters().then((response) => {
      setcharacters(response.data)
    })
    },[] );
    const chars = (character: CharactersResults) => (
      <Grid key={character.id} item xs={12} md={6} lg={4} xl={3}>

        <CharacterCard
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
            <Grid item container md={12} justifyContent="center">
              {characters.info && <Pagination 
               count={characters.info.pages} 
               shape="rounded" 
               page={page}
               onChange={handleChange}/> }
               </Grid>
            {characters.results && characters.results.map(chars)}
            <Grid item container md={12} justifyContent="center">
              {characters.info && <Pagination 
               count={characters.info.pages} 
               shape="rounded" 
               page={page}
               onChange={handleChange}/> }
               </Grid>
          </Grid>
      
         </Grid>
    );
  }
}
