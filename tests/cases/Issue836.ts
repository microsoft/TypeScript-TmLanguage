const _actions = {} as {
    [P in keyof Actions] : PropType<Parameters<Actions[P]> , "0"> extends object ? 
      (payload: PropType<Parameters<Actions[P]> , "0">) => void 
      : 
      () => void;
  };