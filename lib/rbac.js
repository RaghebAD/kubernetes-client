'use strict';

const ApiGroup = require('./api-group');

class Rbac extends ApiGroup {
  constructor(options) {
    const resources = [
      'clusterroles',
      'clusterrolebindings',
      'roles',
      'rolebindings'
    ];
    options = Object.assign({}, options, {
      path: 'apis/rbac.authorization.k8s.io',
      version: options.version || 'v1alpha1',
      groupResources: resources,
      namespaceResources: resources
    });
    super(options);
  }
	/**
	 * Return the API object for the given Kubernetes kind
	 * @param {object|string} k - Kubernetes manifest object or a string
	 * @returns {BaseObject} Kubernetes API object.
	 */
	kind(k) {
		return this[(k.kind || k).toLowerCase()];
	}
}

module.exports = Rbac;
