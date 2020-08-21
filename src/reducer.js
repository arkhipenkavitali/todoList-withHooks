export default (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state, {
          id: Date.now(),
          title: action.payload,
          completed: false,
        }
      ];
    case 'toggle':
      return state.map(el => {
        if(action.payload === el.id){
          el.completed = !el.completed
        }
        return el;
      });
    case 'delete':
      return state.filter(el => {
        return action.payload !== el.id
      });
    default:
      return state;
  }
}