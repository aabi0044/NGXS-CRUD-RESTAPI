import { Component, OnInit } from '@angular/core';
import {TodoState} from '../../states/todo.state';
import {Select, Store} from '@ngxs/store';
import {Todo} from '../../models/Todo';
import {Observable} from 'rxjs';
import {DeleteTodo, GetTodos, SetSelectedTodo} from '../../actions/todo.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
@Select(TodoState.getToDoList) todos:Observable<Todo>;
  constructor(private store:Store) { }

  ngOnInit() {
    this.store.dispatch(new GetTodos());
  }

}
