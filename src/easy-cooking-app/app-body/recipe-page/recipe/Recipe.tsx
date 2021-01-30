import React from "react";
import { connect } from "react-redux";
import Source from "./Source";
// import { WhatsappShareButton } from "react-share";

import { updateIngredientsInRecipe } from "../../../../utils/recipeCalculations";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import classes from "./Recipe.module.scss";

import {
  updateRecipeQuantity,
  updateRecipeEditability,
} from "../../../../redux/actions";
import IngredientGrid from "./IngredientGrid";
import {
  getSelectedRecipe,
  getSelectedRecipePreferences,
} from "../../../../redux/selectors";

import RecipeModel from "../../../model/Recipe.model";

import {
  saveOutline as saveIcon,
  createOutline as createIcon,
} from "ionicons/icons";
import { IonButton, IonIcon } from "@ionic/react";
interface RecipeComponentInterface {
  recipe: RecipeModel;
  //todo: improvise typing
  recipePreferences: any;
  //todo: improvise typing
  recipeEditable: boolean;
  updateRecipeQuantity: Function;
  updateRecipeEditability: Function;
}

class Recipe extends React.Component<RecipeComponentInterface> {
  enableRecipeEdit = () => {
    this.props.updateRecipeEditability(true);
  };
  cancelRecipeEdit = () => {
    this.props.updateRecipeEditability(false);
  };
  saveRecipe = () => {
    this.props.updateRecipeEditability(false);
  };

  render() {
    // return if recipe props is not initialized yet
    if (this.props.recipe === null) {
      return null;
    }

    let recipe = JSON.parse(JSON.stringify(this.props.recipe));
    let recipePreferences = JSON.parse(
      JSON.stringify(this.props.recipePreferences)
    );

    // update recipe target value to empty string, which a requirement for controlled components
    if (recipe.targetRecipe === null || recipe.targetRecipe === undefined) {
      recipe.targetRecipe = "";
    }

    updateIngredientsInRecipe(recipe, recipePreferences);

    return (
      <div className={classes.recipe}>
        <div className={classes.recipeLeftCol}>
          <h5>{recipe.title}</h5>
          <div className={classes.recipeTextData}>
            <label>Recipe Quantity</label>
            <input
              type="text"
              className="form form-control"
              value={recipe.baseRecipe}
              disabled
            />
          </div>
          <div className={classes.recipeTextData}>
            <label>Desired Quantity</label>
            <input
              type="number"
              className="form form-control"
              value={recipePreferences.targetRecipe}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                this.props.updateRecipeQuantity(recipe._id, event.target.value)
              }
            />
          </div>
          {/*Edit buttons*/}
          <div>
            {!this.props.recipeEditable ? (
              <IonButton onClick={this.enableRecipeEdit}>
                Edit recipe
                <IonIcon icon={createIcon} slot="start"></IonIcon>
              </IonButton>
            ) : null}
            {this.props.recipeEditable ? (
              <IonButton onClick={this.saveRecipe}>
                Save Recipe
                <IonIcon icon={saveIcon} slot="start"></IonIcon>
              </IonButton>
            ) : null}
            {this.props.recipeEditable ? (
              <IonButton color="light" onClick={this.cancelRecipeEdit}>
                Cancel<IonIcon name="close-sharp" slot="start"></IonIcon>
              </IonButton>
            ) : null}
          </div>

          <Source source={recipe.source}></Source>
          {/*share on whatsapp*/}
          {/*<WhatsappShareButton title="Share Whatsapp" url="www.google.com">*/}
          {/*  Share on Whatsapp*/}
          {/*</WhatsappShareButton>*/}
        </div>
        <div className={classes.recipeRightCol}>
          <IngredientGrid recipe={recipe}></IngredientGrid>
        </div>
      </div>
    );
  }
}

//todo: improvise state type, remove any
let mapStateToProps = (state: any) => {
  const recipe = getSelectedRecipe(state);
  const recipePreferences = getSelectedRecipePreferences(state);
  const recipeEditable = state.appState.recipeEditable;
  return {
    recipe,
    recipePreferences,
    recipeEditable,
  };
};

export default connect(mapStateToProps, {
  updateRecipeQuantity,
  updateRecipeEditability,
})(Recipe);
