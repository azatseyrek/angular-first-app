import { Component, computed, input, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // This is like props in React. You can define the type of the input property.
  @Input() avatar!: string; // ---> without signal
  @Input({ required: true }) name!: string; // ---> without signal

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  // avatar = input<string>(); //---> with signal
  // name = input.required<string>(); //---> with signal
  //
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  onSelectUser() {}

  // ------------------------>               WITHOUT SIGNAL                <------------------------
  // selectedUser = DUMMY_USERS[randomIndex];
  //
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }
  //
  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser = DUMMY_USERS[randomIndex];
  // }
  // ------------------------>               WITH SIGNAL                <------------------------
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // });
  //
  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
}
