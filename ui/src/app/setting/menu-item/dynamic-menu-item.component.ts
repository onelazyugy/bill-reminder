import {Component, Input, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver, OnInit} from '@angular/core';
import { SettingBillMenuItemComponent } from './../menu-item/bill/setting-bill-menu-item.component';
import { SettingChoreMenuItemComponent } from './../menu-item/chores/setting-chore-menu-item.component';

// http://plnkr.co/edit/v6bCOUVaVm1JAAXZmVzT?p=preview
// https://stackoverflow.com/questions/42880537/angular2-click-load-dynamically-the-component-view
@Component({
    selector: 'app-dynamic-menu-item',
    entryComponents: [SettingBillMenuItemComponent, SettingChoreMenuItemComponent],
    templateUrl: './dynamic-menu-item.component.html',
    styleUrls: ['./dynamic-menu-item.component.css']
})
export class DynamicMenuItemComponent implements OnInit {
    currentComponent = null;
    @ViewChild('dynamicComponentContainer', {read: ViewContainerRef}) dynamicComponentContainer: ViewContainerRef;

    constructor(private resolver: ComponentFactoryResolver) {}

    ngOnInit() {

    }

    @Input() set componentData(data: {component: any, inputs: any }) {
        if (!data) {
          return;
        }

        // Inputs need to be in the following format to be resolved properly
        const inputProviders = Object.keys(data.inputs).map((inputName) => {
            return {provide: inputName, useValue: data.inputs[inputName]};
        });
        const resolvedInputs = ReflectiveInjector.resolve(inputProviders);

        // We create an injector out of the data we want to pass down and this components injector
        const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);

        // We create a factory out of the component we want to create
        const factory = this.resolver.resolveComponentFactory(data.component);

        // We create the component using the factory and the injector
        const component = factory.create(injector);

        // We insert the component into the dom container
        this.dynamicComponentContainer.insert(component.hostView);

        // We can destroy the old component is we like by calling destroy
        if (this.currentComponent) {
          this.currentComponent.destroy();
        }

        this.currentComponent = component;
      }
}

