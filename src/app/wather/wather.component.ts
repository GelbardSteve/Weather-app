import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApixuService } from "../apixu.service";

@Component({
  selector: "app-wather",
  templateUrl: "./wather.component.html",
  styleUrls: ["./wather.component.scss"]
})
export class WatherComponent implements OnInit {
  weatherSearchForm: FormGroup;
  weatherData: Object;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
  ) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ["", Validators.required]
    });
  }

  sendToAPIXU(formValues) {
    this.apixuService
      .getWeather(formValues.location)
      .subscribe(data => {
        this.weatherData = data;
        console.log(this.weatherData);
      });
  }
}
