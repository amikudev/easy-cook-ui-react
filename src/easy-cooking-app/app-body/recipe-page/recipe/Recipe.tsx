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
  updateRecipe,
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
  updateRecipe: Function;
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

    let recipe: RecipeModel = JSON.parse(JSON.stringify(this.props.recipe));
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
            {/*Recipe Quantity*/}
            <label>Recipe Quantity</label>
            <input
              type="text"
              className="form form-control"
              value={recipe.baseRecipe}
              disabled={!this.props.recipeEditable}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                this.props.updateRecipe(
                  recipe._id,
                  ["baseRecipe"],
                  event.target.value
                )
              }
            />

            {/*Desired Quantity*/}
            {!this.props.recipeEditable ? (
              <React.Fragment>
                <label>Desired Quantity</label>
                <input
                  type="number"
                  className="form form-control"
                  value={recipePreferences.targetRecipe}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    this.props.updateRecipeQuantity(
                      recipe._id,
                      event.target.value
                    )
                  }
                />
              </React.Fragment>
            ) : null}

            {/*Health Rating*/}
            {this.props.recipeEditable ? (
              <React.Fragment>
                <label>Health Rating</label>
                <input
                  type="number"
                  className="form form-control"
                  value={recipe.healthRating}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    this.props.updateRecipe(
                      recipe._id,
                      ["healthRating"],
                      event.target.value
                    )
                  }
                />
              </React.Fragment>
            ) : null}

            {/*Taste Rating*/}
            {this.props.recipeEditable ? (
              <React.Fragment>
                <label>Taste Rating</label>
                <input
                  type="number"
                  className="form form-control"
                  value={recipe.tasteRating}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    this.props.updateRecipe(
                      recipe._id,
                      ["tasteRating"],
                      event.target.value
                    )
                  }
                />
              </React.Fragment>
            ) : null}

            {/*Cook*/}
            {this.props.recipeEditable ? (
              <React.Fragment>
                <label>Cook</label>
                <input
                  type="string"
                  className="form form-control"
                  value={recipe.source.cook as string}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    this.props.updateRecipe(
                      recipe._id,
                      ["source", "cook"],
                      event.target.value
                    )
                  }
                />
              </React.Fragment>
            ) : null}

            {/*Book*/}
            {this.props.recipeEditable ? (
              <React.Fragment>
                <label>Book</label>
                <input
                  type="string"
                  className="form form-control"
                  value={recipe.source.book as string}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    this.props.updateRecipe(
                      recipe._id,
                      ["source", "book"],
                      event.target.value
                    )
                  }
                />
              </React.Fragment>
            ) : null}

            {/*Page*/}
            {this.props.recipeEditable ? (
              <React.Fragment>
                <label>Page No. </label>
                <input
                  type="number"
                  className="form form-control"
                  value={recipe.source.page}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    this.props.updateRecipe(
                      recipe._id,
                      ["source", "page"],
                      event.target.value
                    )
                  }
                />
              </React.Fragment>
            ) : null}

            {/*Url*/}
            {this.props.recipeEditable ? (
              <React.Fragment>
                <label>Website </label>
                <input
                  type="string"
                  className="form form-control"
                  value={recipe.source.url}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    this.props.updateRecipe(
                      recipe._id,
                      ["source", "url"],
                      event.target.value
                    )
                  }
                />
              </React.Fragment>
            ) : null}

            {/*Signature*/}
            {this.props.recipeEditable ? (
              <React.Fragment>
                <label>Signature </label>
                <input type="string" className="form form-control" />
              </React.Fragment>
            ) : null}
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

          <Source
            source={recipe.source}
            editable={this.props.recipeEditable}
          ></Source>
          {/*share on whatsapp*/}
          {/*<WhatsappShareButton title="Share Whatsapp" url="www.google.com">*/}
          {/*  Share on Whatsapp*/}
          {/*</WhatsappShareButton>*/}
        </div>
        <div className={classes.recipeRightCol}>
          <IngredientGrid
            recipe={recipe}
            editable={this.props.recipeEditable}
          ></IngredientGrid>
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
  updateRecipe,
  updateRecipeEditability,
})(Recipe);
