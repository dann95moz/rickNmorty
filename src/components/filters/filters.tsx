import './filter.css'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import {  useEffect, useState } from 'react';
import { optionFilters } from '../../interfaces/optionFilters.interface';

export const FiltersComponent=({filtersData}:any)=>{
    
    
    const status =['alive','dead','unknown']
    const gender=['female','male','genderless','unknown']
    const filters=[
        {status},
        {gender}
    ]
          
    const handleClick =(data:optionFilters,index:number,type:string)=>{
    
        console.log(data);
        
        filtersData(data,index) 
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
                  handleClick({status: element},0,'status')
                  
                  
                  :
                  handleClick({gender: element},1,'gender')
              }    
            }
             }           
             />
        </Grid>
    )

    return (
    <Grid container spacing={2} className='filters-container'>
        <Grid item md={12}><p className="title">Filter by category</p></Grid> 
        
        <Stack direction="row" spacing={1}>
        <Grid item md={12}>
            {filters.map(filtersContent)}
        </Grid>
    </Stack>
        </Grid>
        )
}