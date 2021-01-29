# Mantis Place redesign

This project was created using [Create React App](https://github.com/facebook/create-react-app). Project is now being reworked for react and reactstrap.

## Done (Jan 29, 2020)

- Added action type: addMantis
- Added action creator: addMantis, with a payload of mantisId
- Added case to mantises reducer: state=MANTISES, action is add it to the payload based on the id
- Modified MainComponent to make action creator f'n available inside the Main component as a prop
- MantisInfo: Separated modal from the render mantis function
- MantisInfo: passed mantisId and addMantis props to MantisCart
- MantisInfo: attempted to fire this action upon onClick... (not working)

## To Fix

- Check if action worked?
- Code for siebar nav links (making most default to home for now) [easy to do]

## To Do (shorter term)

- Rewrite dropdown logic using hooks

## Longer Term

- Rewrite Mantis Component to be more concise
- Why is there a white space to the right?

## Dependencies

```bash
yarn add bootstrap@4.5.2
yarn add reactstrap@8.5.1
yarn add react-popper@1.3.6
yarn add node-sass@4.14.1
```

## Start Project

```bash
yarn start
```

## Languages/Libraries used

- react
- react-router
- bootstrap
- reactstrap
- sass
