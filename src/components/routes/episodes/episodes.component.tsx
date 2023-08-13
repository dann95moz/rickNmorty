import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Episode } from '../../../interfaces/global/episode.interface';
import { useState, useEffect } from 'react';
import { getFilteredEpisodes } from '../../../services/apiCalls/getEpisodes.service';
import { EpisodeResults } from '../../../interfaces/Results/episodeResults.interface';
import { getFilteredCharacters, getFilteredCharactersByIds } from '../../../services/apiCalls/getCharacters.service';
import { Characters } from '../../../interfaces/global/characters.interface';
import { CharactersResults } from '../../../interfaces/Results/charactersResults.interface';
export function EpisodesComponent() {
    const [episodes, setEpisodes] = useState<Episode>({} as Episode);
    const [characters, setCharacters] = useState<CharactersResults[]>();
    const getCharacters = (result: EpisodeResults) => {
        const characters = result.characters.map(char => char[char.length - 1])
        getFilteredCharactersByIds( characters ).then((response) => {
            setCharacters(response.data)
            console.log(response.data);
            
        })
    }
    // const [page, setPage] = useState<number>(1)
    useEffect(() => {
   
        getFilteredEpisodes().then((response) => {
            setEpisodes(response.data)
       
        }
        
        )
        
        },[characters] );
    return (
        <div>
            {episodes.results && episodes.results.map((result:EpisodeResults, index:number) => {
                return (<Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    key={index}
                     >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                         id="panel1a-header"
                    onClick={()=>getCharacters(result)}
                    >
                         <Typography>{result.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                      Episode: {result.episode}
                         </Typography>
                         <Typography>
                      Air date: {result.air_date}
                         </Typography>
                         <Typography>
                             Creation date: {
                                new Intl.DateTimeFormat('en-US',{year:'numeric', month:"long",day:'numeric'}).format(new Date(result.created))}
                        </Typography>
                        Characters:  
                            
                            {characters ? characters.map((character,index) => (
                             <Typography key={index}>{ character.name}</Typography> 
                            )):''}
                     
                    
                        {/* <CharacterCard/> */}
                    </AccordionDetails>
                  </Accordion>)
             })}
     
 
    </div>)
}