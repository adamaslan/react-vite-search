import * as React from "react";

import { describe, expect, test } from "vitest";

import App, {
  storiesReducer,
  Item,
  List,
  SearchForm,
  InputWithLabel,
} from "./App";

const storyOne = {
  title: "React",
  url: "https://reactjs.org/",
  author: "Jordan Walke",
  num_comments: 3,
  points: 4,
  objectID: 0,
};

const storyTwo = {
  title: "Redux",
  url: "https://redux.js.org/",
  author: "Dan Abramov, Andrew Clark",
  num_comments: 2,
  points: 5,
  objectID: 1,
};

const stories = [storyOne, storyTwo];

describe("storiesReducer", () => {
  test("removes a story from all stories", () => {
    const action = { type: "REMOVE_STORY", payload: storyOne };
    const state = { data: stories, isLoading: false, isError: false };

    const newState = storiesReducer(state, action);

    const expectedState = {
      data: [storyTwo],
      isLoading: false,
      isError: false,
    };

    expect(newState).toStrictEqual(expectedState);
  });
});
describe("storiesReducer", () => {
  test("Story fetch failure", () => {
    const action = { type: "STORIES_FETCH_FAILURE", payload: storyOne };
    const state = { storyOne, isLoading: false, isError: true };

    const newState = storiesReducer(state, action);

    const expectedState = {
      storyOne,
      isLoading: false,
      isError: true,
    };

    expect(newState).toStrictEqual(expectedState);
  });
});

describe("storiesReducer", () => {
  test("removes a story from all stories", () => {
    const action = { type: "REMOVE_STORY", payload: storyOne };
    const state = { data: stories, isLoading: false, isError: false };

    const newState = storiesReducer(state, action);

    const expectedState = {
      data: [storyTwo],
      isLoading: false,
      isError: false,
    };

    expect(newState).toStrictEqual(expectedState);
  });
});
describe("storiesReducer", () => {
  test("Story fetch failure", () => {
    const action = { type: "STORIES_FETCH_FAILURE", payload: storyOne };
    const state = { storyOne, isLoading: false, isError: true };

    const newState = storiesReducer(state, action);

    const expectedState = {
      storyOne,
      isLoading: false,
      isError: true,
    };

    expect(newState).toStrictEqual(expectedState);
  });
});

//
describe("storiesReducer", () => {
  test("Story fetch Init", () => {
    const action = { type: "STORIES_FETCH_INIT", payload: storyOne };
    const state = { storyOne, isLoading: true, isError: false };

    const newState = storiesReducer(state, action);

    const expectedState = {
      storyOne,
      isLoading: true,
      isError: false,
    };

    expect(newState).toStrictEqual(expectedState);
  });
});

describe("storiesReducer", () => {
  test("Story fetch Success", () => {
    const action = { type: "STORIES_FETCH_SUCCESS", payload: storyOne };
    const state = { data: action.payload, isLoading: false, isError: false };

    const newState = storiesReducer(state, action);

    const expectedState = {
      data: storyOne,
      isLoading: false,
      isError: false,
    };

    expect(newState).toStrictEqual(expectedState);
  });
});
