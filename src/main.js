import {render, RenderPosition, } from './render.js';
import TripInfoView from './view/trip-info.js';
import TripSortView from './view/trip-sort.js';
//import EventEditView from './view/event-edit.js';
import EventAddView from './view/event-add.js';
import EventView from './view/event.js';
import FiltersView from './view/trip-filters.js';

const filterContainer = document.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');
const tripMainContainer = document.querySelector('.trip-main');

render(new TripInfoView(), tripMainContainer, RenderPosition.AFTERBEGIN);
render(new FiltersView(), filterContainer);
render(new TripSortView(), tripEventsContainer);
render(new EventAddView(), tripEventsContainer);
render(new EventView(), tripEventsContainer);
render(new EventView(), tripEventsContainer);
render(new EventView(), tripEventsContainer);

