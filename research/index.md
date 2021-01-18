---
layout: default
title: Research
menus: header
usemathjax: true
permalink: /research/
---

<script>
    function changeAbstract(text) {
    document.getElementById('abstractCard').setAttribute('style', 'white-space: pre-line;');
    document.getElementById('abstractCard').textContent = text;
    }
</script>
<div class="container-fluid">
    <div class="row" id="blog-posts-container">
        <div class="col col-lg-6">
            <ul>
                {%- for publi in site.data.publications -%}
                <div class="card blog-post" id="{{-publi.id-}}">
                    <!--<img class="card-img-top" src="{{-site.url-}}{{-site.baseurl-}}{{- publi.thumbnail -}}">-->
                    <div class="card-body center">
                        <!-- <img src="{{-site.url-}}{{-site.baseurl-}}/assets/img/{{- site.author_logo -}}" class="author-profile-img"> -->
                        {%- if publi.title_fr -%}
                        <h4 lang='fr' class="card-title">{{- publi.title_fr -}}</h4>
                        {%- else -%}
                        <h4 lang='fr' class="card-title">{{- publi.title -}}</h4>
                        {%- endif -%}
                        <h4 lang='en' class="card-title">{{- publi.title -}}</h4>
                        {%- if publi.subtitle -%}
                        <h7 class="card-subtitle" style="padding: 10px">{{- publi.subtitle -}}</h7>
                        {%- endif -%}
                        <h6> {{-publi.co-authors-}} </h6>
                        <h7 class="card-subtitle mb-2 text-muted">{{-publi.venue-}},{{- publi.date | date: "%b %-d, %Y" -}}</h7>
                        {%- if publi.keywords_fr -%}
                        <p lang='fr'> {{-publi.keywords_fr-}} </p>
                        {%- else -%}
                        <p lang='fr'> {{-publi.keywords-}} </p>                        
                        {%endif -%}
                        <p lang='en'> {{-publi.keywords-}} </p>
                        <br>
                            <p class="profile-links">
                                {%- if summary_fr -%}
                                <button lang='fr' class="btn btn-dark btn-lg" onclick="changeAbstract('{{-publi.summary_fr-}}')" href="#abstractCard">Résumé</button>
                                {%- else -%}
                                <button lang='fr' class="btn btn-dark btn-lg" onclick="changeAbstract('{{-publi.summary-}}')" href="#abstractCard">Résumé</button>
                                {%- endif -%}
                                <button lang='en' class="btn btn-dark btn-lg" onclick="changeAbstract('{{-publi.summary-}}')" href="#abstractCard">Abstract</button>
                                <a lang='en' href="{{- publi.doi -}}" rel="noopener noreferrer" target=_blank data-disqus-identifier="{{- publi.url -}}" class="btn btn-dark btn-lg">Access</a>
                                <a lang='fr' href="{{- publi.doi -}}" rel="noopener noreferrer" target=_blank data-disqus-identifier="{{- publi.url -}}" class="btn btn-dark btn-lg">Accès</a>
                                <a href="{{- publi.rg-link -}}" rel="noopener noreferrer" target=_blank data-disqus-identifier="{{- publi.url -}}" class="btn btn-dark btn-lg">@RG</a>
                                {%- if publi.dblp-link -%}
                                <a href="{{- publi.dblp-link -}}" rel="noopener noreferrer" target=_blank data-disqus-identifier="{{- publi.url -}}" class="btn btn-dark btn-lg">@dblp</a>
                                {%- endif -%}
                                {%- if publi.video-link -%}
                                <a href="{{- publi.video-link -}}" rel="noopener noreferrer" target="_blank" class="btn btn-dark btn-lg btn-video"></a>
                                {%- endif -%}
                            </p>
                            
                        </div>
                    </div>
                    {%- endfor -%}
                </ul>
            </div>
            <div class="col col-lg-5">
                <div class="card blog-post">
                    <h4 lang='en' class="card-title">Abstract</h4>
                    <h4 lang='fr' class="card-title">Résumé</h4>
                    <div id='abstractCard'></div>
                </div>
                <div class="card blog-post">
                    <h4 lang='en' class="card-title">Reviewer</h4>
                    <h4 lang='fr' class="card-title">Relecteur</h4>
                    <div id='reviewerCardJournals'>
                        {%- for review_type in site.data.reviews -%}
                        <h5 lang='en' class="card-subtitle">{{-review_type.name-}}</h5>
                        <h5 lang='fr' class="card-subtitle">{{-review_type.name_fr-}}</h5>
                        <p>{{- review_type.content -}} </p>
                        {%- endfor -%}
                    </div>
                </div>
            </div>
            <!--<div class="row center">
            {%- if paginator.total_pages > 1 -%}
            <ul class="pagination pagination-sm">
            {%- if paginator.previous_page -%}
            <li class="pagination-link"><a href="{{- paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' -}}">&laquo;</a></li>
            {%- else -%}
            <li class="pagination-link disabled"><span aria-hidden="true">&laquo;</span></li>
            {%- endif -%}
            
            <li class="pagination-link" ><a href="/research">First</a></li>
            
            {%- for page in (1..paginator.total_pages) -%}
            {%- if page == paginator.page -%}
            <li class="active pagination-link"><a>{{- page -}}<span class="sr-only">(current)</span></a></li>
            {%- elsif page == 1 -%}
            <li class="pagination-link"><a href="/research">{{- page -}}</a></li>
            {%- else -%}
            <li class="pagination-link"><a href="{{- site.paginate_path | prepend: site.baseurl | replace: '//', '/' | replace: ':num', page -}}">{{- page -}}</a></li>
            {%- endif -%}
            {%- endfor -%}
            
            <li class="pagination-link"><a href="/research/page/{{- paginator.total_pages -}}/#/">Last</a></li>
            
            {%- if paginator.next_page -%}
            <li class="pagination-link"><a href="{{- paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' -}}">&raquo;</a></li>
            {%- else -%}
            <li class="disabled pagination-link"><span>&raquo;</span></li>
            {%- endif -%}
            </ul>
            {%- endif -%}
            </div>
            
            </div>
            {%- include blog_sidebar.html -%}-->
        </div>
    </div>
    
    
    
