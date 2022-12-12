# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The BlogPostsController inherits from the ApplicationController
class BlogPostsController < ApplicationController
  def index
 
  # ---2) The index method is used to display all the blog posts
    @posts = BlogPost.all
  end

  # ---3) The show method is used to display a single blog post
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The new method is used to create a new blog post
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The create method is used to save a new blog post
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) The edit method is used to edit a blog post
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The update method is used to save the changes made to a blog post
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) The destroy method is used to delete a blog post
      redirect_to blog_posts_path
    end
  end

  # ---9) The private method is used to restrict access to the methods below it
  private
  def blog_post_params
    # ---10) The blog_post_params method is used to require and permit the title and content of a blog post
    params.require(:blog_post).permit(:title, :content)
  end
end
