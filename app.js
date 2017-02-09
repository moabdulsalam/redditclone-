(function() {
  'use strict'

	angular.module("app", [])
		.component('reddit', {
			controller: function appController(){
				const vm = this
//onload
				vm.$onInit = function() {
					vm.posts = [];
					vm.comments = [];
				}

				// add post
				vm.addPost = function() {
					vm.posts.push(vm.post)
					delete vm.post
				}

				//add comment
				vm.addComment = function() {
					vm.comments.push(vm.comment)
					delete vm.comment
				}


			},	//END OF CONOTROLLER
			template: `
			<main class="container">
			    <div class="pull-right">
			        <p><a class="btn btn-info" ng-click="showDiv =! showDiv">New Post</a></p>
			    </div>
			    <ul class="nav nav-pills">
			        <li role="presentation" class="active">
			            <input type="search" class="form-control input-sm search-form" placeholder="Filter">
			        </li>
			        <div class="form-inline">
			            <label for="sort"> Sort by </label>
			            <select class="form-control" id="sort">
			                <option>Some text</option>
			                <option>Some text</option>
			            </select>
			        </div>
			    </ul>
			    <div class="row">
			        <div class="col-md-8" ng-show="showDiv">

			            <form ng-submit="$ctrl.addPost()">
			                <div>
			                    <label for="title">Title</label>
			                    <input id="title" class="form-control" ng-model="$ctrl.post.title">
			                </div>
			                <div>
			                    <label for="body">Body</label>
			                    <textarea id="body" class="form-control" ng-model="$ctrl.post.body"></textarea>
			                </div>
			                <div>
			                    <label for="author">Author</label>
			                    <input id="author" class="form-control" ng-model="$ctrl.post.author">
			                </div>
			                <div>
			                    <label for="image-url">Image URL</label>
			                    <input id="image-url" class="form-control" ng-model="$ctrl.post.img">
			                </div>
			                <div class="form-group">
			                    <button type="submit" class="btn btn-primary">
			                        Create Post
			                    </button>
			                </div>

			            </form>
			        </div>
			    </div>


			    <div class="row">
			        <div class="col-md-12" ng-repeat="post in $ctrl.posts">
			            <div class="well">
			                <div class="media-left">
			                    <img class="media-object" ng-src="{{post.img}}">
			                </div>

			                <div class="media-body">
			                    <h4 class="media-heading">
			            {{post.title}}
			            |
			            <a><i class="glyphicon glyphicon-arrow-up"></i></a>
			            <a><i class="glyphicon glyphicon-arrow-down"></i></a>
			            10
			          </h4>
			                    <div class="text-right">
			                        {{post.author}}
			                    </div>
			                    <p>
			                        {{post.body}}
			                    </p>
			                    <div>
			                        Some time ago |
			                        <i class="glyphicon glyphicon-comment"></i>
			                        <a>
			              				Amount of comments
			            			</a>
			                    </div>

			                    <div class="col-md-offset-1">
			                        <hr>
			                        <p>
			                            Leave a comment!
			                        </p>
			                        <div ng-repeat="comment in $ctrl.comments">
			                        <p>{{comment}}</p>
			                        </div>
			                        <form class="form-inline" ng-submit="$ctrl.addComment()">
			                            <div class="form-group">
			                                <input class="form-control" placeholder="hola" ng-model="$ctrl.comment">
			                            </div>
			                            <div class="form-group">
			                                <input type="submit" class="btn btn-primary">
			                            </div>
			                        </form>
			                    </div>

			                </div>
			            </div>
			        </div>
			    </div>
			</main>
			`

		}) //END OF COMPONENT

}());
