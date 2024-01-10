document.addEventListener('DOMContentLoaded', function () {
    const addRecipeForm = document.getElementById('addRecipeForm');
    const recipesList = document.getElementById('recipes');
  
    addRecipeForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Obter os valores dos campos do formulário
      const title = document.getElementById('title').value;
      const ingredients = document.getElementById('ingredients').value;
      const instructions = document.getElementById('instructions').value;
  
      // Adicionar a nova receita à lista
      addRecipe(title, ingredients, instructions);
  
      // Limpar os campos do formulário após adicionar a receita
      addRecipeForm.reset();
    });
  
    // Função para adicionar uma nova receita à lista
    function addRecipe(title, ingredients, instructions) {
      const recipeItem = document.createElement('li');
      recipeItem.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Ingredientes:</strong> ${ingredients}</p>
        <p><strong>Instruções:</strong> ${instructions}</p>
        <button onclick="deleteRecipe(this)">Excluir Receita</button>
      `;
  
      recipesList.appendChild(recipeItem);
    }
  });
  
  // Função para excluir uma receita da lista
  function deleteRecipe(button) {
    const recipeItem = button.parentNode;
    const recipesList = recipeItem.parentNode;
    recipesList.removeChild(recipeItem);
  }

  // Função para preparar o formulário de atualização com os dados da receita selecionada
function prepareUpdateForm(recipeId) {
    const recipe = getRecipeById(recipeId); // Implemente uma função getRecipeById para obter os dados da receita pelo ID
    if (recipe) {
        document.getElementById('updateTitle').value = recipe.title;
        document.getElementById('updateIngredients').value = recipe.ingredients;
        document.getElementById('updateInstructions').value = recipe.instructions;
        document.getElementById('updateRecipeForm').style.display = 'block';
    }
}
