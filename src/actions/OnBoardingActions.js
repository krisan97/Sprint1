import { Actions } from 'react-native-router-flux';
import {
  FINISH_ONBOARDING,
  FINISH_INTRO
 } from './types';

 export const finishOnBoarding = () => {
   Actions.main({ type: 'reset' });

   return {
     type: FINISH_ONBOARDING,
     payload: false
   };
 };

 export const finishIntro = () => {
   Actions.onboarding();

   return {
     type: FINISH_INTRO,
     payload: false
   };
 };
