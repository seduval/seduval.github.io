---
layout: default
usemathjax: true
permalink: /research/
---
`$$x^2$$`
$$x^2$$
`tt`
 <div class=container-fluid">
 <div class="row" id="blog-posts-container">      
      <div class="col-6">
              <ul>
                  {% for publi in site.data.publications %}
                  <div class="card blog-post">
                      <!--<img class="card-img-top" src="{{site.url}}{{site.baseurl}}{{ publi.thumbnail }}">-->
                      <div class="card-body center">
                          <!-- <img src="{{site.url}}{{site.baseurl}}/assets/img/{{ site.author_logo }}" class="author-profile-img"> -->
                          <h4 class="card-title">{{ publi.title }}</h4>
                          <h5> {{publi.co-authors}} </h5>
                          <h6 class="card-subtitle mb-2 text-muted">{{publi.venue}}, {{ publi.date | date: "%b %-d, %Y" }}</h6>  
                          <h7> {{publi.keywords}} </h7>
                          <p>
                              <button class="btn btn-dark btn-lg" onclick="changeAbstract('{{publi.summary}}')">Abstract</button>
                 <a href="/research/added-latex-equations-support/" rel="noopener noreferrer" target=_blank class="btn btn-dark btn-lg">Test</a>
                              <a href="{{ publi.doi | prepend: site.baseurl }}" rel="noopener noreferrer" target=_blank data-disqus-identifier="{{ publi.url }}" class="btn btn-dark btn-lg">Access</a>
                              <span class="disqus-comment-count" data-disqus-identifier="{{ publi.url }}"></span>
                          </p>
                      </div>
                  </div>
                  {% endfor %}
              </ul>
       </div>
       <div class="col-6">
              <div class="card blog-post">
                 <h4 class="card-title">Abstract</h4>
                 <div id='abstractCard'> Test</div>
              </div>
       </div>
        <!--<div class="row center">
          {% if paginator.total_pages > 1 %}
            <ul class="pagination pagination-sm">
              {% if paginator.previous_page %}
                <li class="pagination-link"><a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&laquo;</a></li>
              {% else %}
                <li class="pagination-link disabled"><span aria-hidden="true">&laquo;</span></li>
              {% endif %}

              <li class="pagination-link" ><a href="/research">First</a></li>

              {% for page in (1..paginator.total_pages) %}
                {% if page == paginator.page %}
                  <li class="active pagination-link"><a>{{ page }}<span class="sr-only">(current)</span></a></li>
                {% elsif page == 1 %}
                  <li class="pagination-link"><a href="/research">{{ page }}</a></li>
                {% else %}
                  <li class="pagination-link"><a href="{{ site.paginate_path | prepend: site.baseurl | replace: '//', '/' | replace: ':num', page }}">{{ page }}</a></li>
                {% endif %}
              {% endfor %}

              <li class="pagination-link"><a href="/research/page/{{ paginator.total_pages }}/#/">Last</a></li>

              {% if paginator.next_page %}
                <li class="pagination-link"><a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">&raquo;</a></li>
              {% else %}
                <li class="disabled pagination-link"><span>&raquo;</span></li>
              {% endif %}
            </ul>
          {% endif %}
      </div>

    </div>
    {%- include blog_sidebar.html -%}-->
</div>
 </div>
                                                   

