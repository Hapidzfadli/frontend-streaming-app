import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, ToastModule, CardModule],
  providers: [FormBuilder, MessageService],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  tiles = Array.from({ length: 12 }, (_, i) => `Tile ${i + 1}`);
  registerForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private messageService: MessageService) {
    this.registerForm = this.fb.group({
      fullname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  informationContents = [
    {
      icon: '🔥',
      title: 'Trending Now',
      subtitle: "Discover what everyone's watching today.",
      color: 'from-indigo-500/20 to-purple-700/30',
    },
    {
      icon: '🎬',
      title: 'HD Streaming',
      subtitle: 'No lags, just pure entertainment.',
      color: 'from-blue-500/20 to-sky-700/30',
    },
    {
      icon: '💸',
      title: 'Earn from Videos',
      subtitle: 'Upload your videos and start earning.',
      color: 'from-purple-500/20 to-pink-500/30',
    },
    {
      icon: '📱',
      title: 'Cross-device',
      subtitle: 'Smartphones, tablets, smart TVs — all supported.',
      color: 'from-green-500/20 to-emerald-700/30',
    },
    {
      icon: '🎞️',
      title: 'Latest Releases',
      subtitle: 'New blockbusters and shows weekly.',
      color: 'from-yellow-500/20 to-orange-600/30',
    }
  ];

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) return;
    this.loading = true;

    this.authService.register(this.registerForm.value).subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register successful 🎉' });
        this.registerForm.reset();
        this.submitted = false;
        this.loading = false;
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Register failed 😞' });
        this.loading = false;
      }
    });
  }

  get halfLength(): number {
    return Math.floor(this.tiles.length / 2);
  }

}
