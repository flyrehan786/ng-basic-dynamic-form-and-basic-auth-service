import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() formConfig: any; // Input property to receive form configuration
  public form: any = {};

  constructor(private fb: FormBuilder, private _authService: AuthService, _renderer2: Renderer2) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    const group: any = {};
    this.formConfig.fields.forEach((field: any) => {
      const validators = [];
      if(field.pattern !== '') {
        validators.push(Validators.pattern(field.pattern))
      }
      if (field.required) {
        validators.push(Validators.required);
      }
      group[field.name] = [field.value || '', validators];
    });

    this.form = this.fb.group(group);
  }

  getFieldControl(field: any) {
    return this.form.get(field.name);
  }
  submit(f: any) {
    if(this.formConfig.page == 'login') {
      this._authService.login(f.username, f.password);
    } else console.log('Login Failed')
  }
}
