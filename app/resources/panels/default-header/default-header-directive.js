(function () {
  'use strict';

  angular
    .module('app')
    .directive('defaultHeader', defaultHeader);

    defaultHeader.$inject = ["panelService", "assetsCdnPath", "assetsVersion"];

  function defaultHeader(panelService, assetsCdnPath, assetsVersion) {
    var directive = {
      scope: {
        uniqueId : '@',
        panelData: '@',
        mode: '@',
        colorscheme: '@'
      },
      restrict: 'AE',
      templateUrl: 'app/resources/panels/default-header/default-header.html',
      link: link
    }
    return directive;

    function link(scope, ele, attributes) {
      scope.cdnPath = assetsCdnPath + assetsVersion;

      if(scope.panelData) {
        scope.data = panelService.setData(scope.panelData);
      };

      scope.menuClick = menuClick;
      function menuClick() {
        var nativeElement = jQuery('default-header');
        var buttonLabel = nativeElement.find('.em-js-btn-label');

        var buttonText = buttonLabel.text();
        var buttonCloseText = buttonLabel.attr('data-em-btn-toggle-text');
        var buttonSwap = nativeElement.find('.em-js-btn-swap-icon');
        var iconPath = nativeElement.find('.em-js-btn-icon').attr('data-em-icon-path');

        if (buttonText == "Close") {
          buttonLabel.text('Menu');
          nativeElement.find('.em-js-btn-icon').removeClass('em-u-is-hidden');
          buttonSwap.addClass('em-u-is-hidden');
          scope.closeAllDropdown();
        } else {
          buttonLabel.text('Close');
          nativeElement.find('.em-js-btn-icon').addClass('em-u-is-hidden');
          buttonSwap.removeClass('em-u-is-hidden');
        }
        nativeElement.toggleClass('em-is-active');
        var body = nativeElement.closest('body');
        body.find('.em-js-header').toggleClass('em-is-active');
        body.toggleClass('em-is-disabled-small');
        body.find('.em-js-nav-panel').toggleClass('em-is-active');

      }

      scope.dropDown = dropDown;

      function dropDown(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!(window.matchMedia("screen and (max-width: 767px)").matches ||window.matchMedia("screen and (max-width: 1024px)").matches )) {
          var self = e.currentTarget.getElementsByClassName("em-js-nav-dropdown-trigger")[0];
          var dropdownPanel = self.nextElementSibling;
          if (dropdownPanel) {
            if (self.classList.contains('em-is-active')) {
              self.classList.remove('em-is-active');
              self.setAttribute("aria-expanded", "false");
              self.setAttribute("aria-selected", "false");
              dropdownPanel.classList.remove('em-is-active');
              dropdownPanel.setAttribute('aria-hidden', 'true');
              dropdownPanel.setAttribute('aria-selected', 'false');
            }
            else {
              var dropdownTriggers = document.querySelectorAll('.em-js-nav-dropdown-trigger');
              for (var i = 0; i < dropdownTriggers.length; i++) {
                dropdownTriggers[i].classList.remove('em-is-active');
                dropdownTriggers[i].setAttribute('aria-expanded', 'false');
                dropdownTriggers[i].setAttribute('aria-selected', 'false');
              }
              var dropdownPanels = document.querySelectorAll('.em-js-nav-dropdown');
              for (var i = 0; i < dropdownPanels.length; i++) {
                dropdownPanels[i].classList.remove('em-is-active');
                dropdownPanels[i].setAttribute('aria-hidden', 'true');
                dropdownPanels[i].setAttribute('aria-selected', 'false');
              }
              self.classList.add('em-is-active');
              self.setAttribute('aria-expanded', 'true');
              self.setAttribute('aria-selected', 'true');
              dropdownPanel.classList.add('em-is-active');
              dropdownPanel.setAttribute('aria-hidden', 'false');
              dropdownPanel.setAttribute('aria-selected', 'true');
            }
          }
        }
      }

      scope.childDropdown = childDropdown;

      function childDropdown(e) {
        e.preventDefault();
        e.stopPropagation();
        if ((window.matchMedia("screen and (max-width: 767px)").matches ||window.matchMedia("screen and (max-width: 1024px)").matches )) {
          var self = e.currentTarget.parentNode;
          var dropdownPanel = self.nextElementSibling;
          if (dropdownPanel) {
            if (self.classList.contains('em-is-active')) {
              self.classList.remove('em-is-active');
              self.setAttribute("aria-expanded", "false");
              self.setAttribute("aria-selected", "false");
              dropdownPanel.classList.remove('em-is-active');
              dropdownPanel.setAttribute('aria-hidden', 'true');
              dropdownPanel.setAttribute('aria-selected', 'false');
            }
            else {
              var dropdownTriggers = document.querySelectorAll('.em-js-nav-dropdown-trigger');
              for (var i = 0; i < dropdownTriggers.length; i++) {
                dropdownTriggers[i].classList.remove('em-is-active');
                dropdownTriggers[i].setAttribute('aria-expanded', 'false');
                dropdownTriggers[i].setAttribute('aria-selected', 'false');
              }
              var dropdownPanels = document.querySelectorAll('.em-js-nav-dropdown');
              for (var i = 0; i < dropdownPanels.length; i++) {
                dropdownPanels[i].classList.remove('em-is-active');
                dropdownPanels[i].setAttribute('aria-hidden', 'true');
                dropdownPanels[i].setAttribute('aria-selected', 'false');
              }
              self.classList.add('em-is-active');
              self.setAttribute('aria-expanded', 'true');
              self.setAttribute('aria-selected', 'true');
              dropdownPanel.classList.add('em-is-active');
              dropdownPanel.setAttribute('aria-hidden', 'false');
              dropdownPanel.setAttribute('aria-selected', 'true');
            }
          }
        }
      }

      scope.dropDownOpen = dropDownOpen;

      function dropDownOpen(element) {
        if ((window.matchMedia("screen and (max-width: 767px)").matches ||window.matchMedia("screen and (max-width: 1024px)").matches )) {
          var self = element.getElementsByClassName("em-js-nav-dropdown-trigger")[0];
          var dropdownPanel = self.nextElementSibling;
          if (dropdownPanel) {
            self.classList.add('em-is-active');
            self.setAttribute('aria-expanded', 'true');
            self.setAttribute('aria-selected', 'true');
            dropdownPanel.classList.add('em-is-active');
            dropdownPanel.setAttribute('aria-hidden', 'false');
            dropdownPanel.setAttribute('aria-selected', 'true');
          }
        }
      }

      scope.dropDownClose = dropDownClose;

      function dropDownClose(element) {
        var self = element.getElementsByClassName("em-js-nav-dropdown-trigger")[0];
        var dropdownPanel = self.nextElementSibling;
        if (dropdownPanel) {
          if (self.classList.contains('em-is-active')) {
            self.classList.remove('em-is-active');
            self.setAttribute("aria-expanded", "false");
            self.setAttribute("aria-selected", "false");
            dropdownPanel.classList.remove('em-is-active');
            dropdownPanel.setAttribute('aria-hidden', 'true');
            dropdownPanel.setAttribute('aria-selected', 'false');
          }
        }

      }
      scope.closeAllDropdown = closeAllDropdown;
      function closeAllDropdown() {
        var navItems = document.querySelectorAll('.em-c-primary-nav__item');
        if (navItems) {
          for (var i = 0; i < navItems.length; i++) {
            scope.dropDownClose(navItems[i]);
          }
          // navItems.forEach(function (item) {
          //   scope.dropDownClose(item);
          // });
        }
      }
    }
  }
})();
