{% assign thisyear = "2022" %}

# Lista aktywności na Adwent Rodzinny {{ thisyear }}

Ta lista zdradza, co przed nami na każdy dzień adwentu. Zachęcamy, aby jej nie podglądać i codziennie [wchodzić na stronę główną](/) i dać się zaskoczyć!

Dużo rodzin przez ostatnie lata zgłosiło jednak prośbę o taką listę, aby móc planować sobie dni lub nawet wydrukować ją i pociąć na mniejsze kartki i umieścić je w fizycznym kalendarzu adwentowym.

{% for post in site.posts %}
	{% assign postyear = post.date | date: "%Y" %}
	{% if postyear == thisyear %}
		<h2 id="{{ post.url }}"><a href="{{ post.url }}">{{ post.title }}</a></h2>
		{% include lang.date.html date=post.date %}
		<h3>{{ langdate }}</h3>
		<br />
	{% endif %}
{% endfor %}

**[Powrót do strony głównej](/)**
