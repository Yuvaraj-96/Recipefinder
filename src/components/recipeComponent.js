import styled from 'styled-components';

export const RecipeListContainer= styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding:30px;
gap:20px;
justify-content: space-evenly;

`;

export const RecipeContainer = styled.div`
display: flex;
flex-direction: column;
padding:30px;
width: 300px;
gap:20px;
box-shadow: 0 3px 10px 0 #aaa;

`;

export const CoverImg= styled.img`
height:200px;
object-fit:cover;
`;

export const RecipeName = styled.span`
font-size:18px;
font-weight:bold;
color:balck;
margine:10px 0;
`;

export const IngredientText = styled.span`
font-size:18px;
border: solid 1px green;
color:balck;
// margin:10px 0;
cursor:pointer;
padding:10px 15px;
border-radius:4px;
color: green;
text-align: center;
margin-bottom:12px;
`;

export const SeeMoreText = styled(IngredientText)`
color: #eb3300;
border: solid 1px green;
`;
export const Placeholder= styled.img`
width: 240px;
height: 240px;
margin: 200px;
opacity:50%;
`;

