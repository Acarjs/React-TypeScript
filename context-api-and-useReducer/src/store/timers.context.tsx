import { type ReactNode, createContext, useContext, useReducer } from 'react';

export type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

//custom component
export function useTimersContext() {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error('TimersContext is null - that should not be the case');
  }

  return timersCtx;
}

type TimersContextProviderProps = {
  children: ReactNode;
};

type StartTimersAction = {
  type: 'START_TIMERS';
};

type StopTimersAction = {
  type: 'STOP_TIMERS';
};

type AddTimerAction = {
  type: 'ADD_TIMER';
  payload: Timer;
};

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

// type Action = {
//   type: 'ADD_TIMER' | 'START_TIMERS' | 'STOP_TIMERS'; //use literal type in conjuction with union types.
// };

function timersReducer(state: TimersState, action: Action): TimersState {
  //this function will be executed by React. React will give us the current "state" before the latest action was processed. And the action that was dispatched.
  if (action.type === 'START_TIMERS') {
    return { ...state, isRunning: true };
  }

  if (action.type === 'STOP_TIMERS') {
    return { ...state, isRunning: false };
  }

  if (action.type === 'ADD_TIMER') {
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          name: action.payload.name,
          duration: action.payload.duration,
        },
      ],
    };
  }

  return state;
}

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  //initialState is only timers and isRunning. reducer should be a function that's automatically executed by React whenever a new action dispatched. And we'll be able to dispatch such an action with help of the return value of useReducer. useReducer returns an array includes two elements. First element is the current state and second element is dispatch function which allows us to trigger a state change. reducer(timersReducer) function will responsible for generating the new state.
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({ type: 'ADD_TIMER', payload: timerData });
    },
    startTimers() {
      dispatch({ type: 'START_TIMERS' });
    },
    stopTimers() {
      dispatch({ type: 'STOP_TIMERS' });
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
