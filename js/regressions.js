function hide_sorting(columns) {
    var selector = "";
    if (columns) {
        $(columns).each(function() {
            selector += "a.sorter[name='" + this + "'],";
        });
    } else {
        selector = "a.sorter";
    }
    $(selector).each(function(){
        $(this).remove();
    });
}

function hide_all_actions(show_context) {
    delete CONTACT_ROWS["actions"];
    $("th#column-actions").remove();
}

function hide_edit_action(show_context) {
    CONTACT_ROWS["actions"] = "<td><i class='icon-remove' onclick='remove_contact(this);'></i></td>";
}

function remove_context_and_type_from_create() {
    var form = $("form#contact-form");
    $("#field-context", form).remove();
    $("#field-type", form).remove();
}

function remove_context_and_type_from_grid() {
    $("th#column-context").remove();
    $("th#column-type").remove();
    CONTACT_ROWS["context"] = "<td class='contact-context sortable' style='display:none' name='contact-context'>${context}</td>";
    CONTACT_ROWS["type"] = "<td class='contact-type sortable' style='display:none' name='contact-type'>${type}</td>";
}
