// export interface FormDataInterface {
//   type: "item";
//   name?: string;
//   calories: number;
//   fat?: number;
//   carbs?: number;
//   protine?: number;
//   serving_size?: number;
//   serving_type: string;
//   servings: number;
// }

export interface CauseCardsInterface {
  causeTitle: string;
  amountRaised: number;
  goal: number;
  id: number;
  causeImg?: string;
  setCurrentCause:React.Dispatch<React.SetStateAction<number>>;
}