import styled from 'styled-components';
import{ useState} from 'react';
import Axios from "axios";
import{Container,Header,AppName,AppIcon,Search,SearchInput,SearchIcon,sampleResponseData} from '../src/components/headerComponent';
import{RecipeListContainer,RecipeContainer,CoverImg,RecipeName,IngredientText,SeeMoreText,Placeholder} from '../src/components/recipeComponent';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
//import sampleResponseData from '../src/sampleData';




function App() {
const [timeoutId, updateTimeoutId]= useState();
const [recipeList, updateRecipeList]= useState([]);
const AppID='bed1b98c';
const AppKey='4f30067680531eef7d639e6f964723df';

const RecipeBundel= (props)=>{
  const[show, SetShow]= useState(false);
  const{ recipeObje}= props;
  return(<>
        <Dialog open={show}>
        <DialogTitle id="alert-dialog-slide-title">{"Ingredients"}</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObje.ingredients.map((ingredientsObj)=>{
                <tr>
                <td>{ingredientsObj.text}</td>
                <td>{ingredientsObj.weight}</td>
              </tr>
              })}
            
            </tbody>           
          </table>

        </DialogContent>
        <DialogActions>
        <IngredientText onClick={()=>window.open(recipeObje.url)}>See More </IngredientText>        
        <SeeMoreText onClick={()=>SetShow(false)}>Close</SeeMoreText>
        </DialogActions>
        </Dialog>
         <RecipeContainer >
            <CoverImg src={recipeObje.image}/>
            <RecipeName>{recipeObje.label}</RecipeName>
            <IngredientText onClick={()=>SetShow(true)}>Ingredients</IngredientText>
            <SeeMoreText onClick={()=>window.open(recipeObje.url)}>See Complete Recipe </SeeMoreText>        
          </RecipeContainer>
          </>
  );
}
const fetchRecipe=async (searchKey)=>
{

   const response = await Axios.get(`https://api.edamam.com/search?app_id=${AppID}&app_key=${AppKey}&q=${searchKey}`).then(function(response){
    console.log(response);
   });

  //const response =sampleResponseData;
  updateRecipeList(response.data.hits);
}
const onTextChange =(event)=>{
  clearTimeout(timeoutId);
  const timeout= setTimeout(()=> fetchRecipe(event.target.value), 500);
  updateTimeoutId(timeout);
  console.log("API Call");
};

  return (<>
    <Container>   
       <Header> 
        <AppName><AppIcon src='/fastfood_worker.svg'/>Recipe Finder</AppName>
        <Search>
         <SearchIcon src='/search_icon.svg'/> 
         <SearchInput placeholder='Search Recipe'onChange={onTextChange}/>
        </Search>
      </Header> 
      <RecipeListContainer>
        
          {recipeList.length ? recipeList.map((recipeObject)=>{
            <RecipeBundel recipeObject={recipeObject.recipe}/>            
          }):<Placeholder src='/fastfood_worker.svg'/>}
          {/* <RecipeContainer>
          <CoverImg src='/fastfood_worker.svg'/>
          <RecipeName>Recipe Name</RecipeName>
          <IngredientText>Ingredients</IngredientText>
          <SeeMoreText>See Complete Recipe </SeeMoreText>        
        </RecipeContainer>      */}
      </RecipeListContainer>    
    </Container>
    </>
  );
}

export default App;
