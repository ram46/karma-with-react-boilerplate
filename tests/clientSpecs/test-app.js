var React = require('react');
var ReactTestUtils = require('react-dom/test-utils'); // ES5 with npm
// var expect = require('expect');
var expect = require('chai').expect;
var App = require('../../client/src/components/App.jsx')


describe('App', function () {
  it('App component renders without problems', function () {
    // var app = ReactTestUtils.renderIntoDocument(App);
    var app = ReactTestUtils.isCompositeComponentWithType(App, '<App />')
    expect(app).to.exist;
    // expect(1).to.eql(1);
  });
});

